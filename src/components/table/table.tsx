import {
  getKeyValue,
  Pagination,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableProps,
  TableRow,
} from '@nextui-org/react';
import React, { useMemo } from 'react';
import TableHeaderComp, { TableHeaderProps } from '../tableHeader/tableHeader';

export interface TableCompProps extends TableHeaderProps, TableProps {
  page: number;
  data: { count: number; results: Record<string, string>[] };
  isLoading: boolean;
  rowsPerPage: number;
  columns: { label: string; key: string }[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const TableComp: React.FC<TableCompProps> = ({
  page,
  columns,
  setPage,
  data,
  isLoading,
  rowsPerPage,
  ...rest
}) => {
  const pages = useMemo(() => {
    return data?.count ? Math.ceil(data.count / rowsPerPage) : 0;
  }, [data?.count, rowsPerPage]);

  const loadingState =
    isLoading || data?.results?.length === 0 ? 'loading' : 'idle';

  return (
    <section className="flex h-full flex-col gap-3 overflow-hidden">
      <TableHeaderComp {...rest} />
      <Table
        aria-label="Example table with client async pagination"
        selectionMode="multiple"
        color="primary"
        isHeaderSticky
        classNames={{
          base: 'overflow-auto bg-white rounded-lg pr-1 shadow-small flex-1',
          wrapper: 'shadow-none p-0',
        }}

        // {...args}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={data?.results ?? []}
          loadingContent={<Spinner />}
          loadingState={loadingState}
        >
          {(item) => (
            <TableRow key={item?.name}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex h-9 w-full justify-center ">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
      </div>
    </section>
  );
};
export default TableComp;
