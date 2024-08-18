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
import useSWR from 'swr';
import TableHeaderComp, { TableHeaderProps } from '../tableHeader/tableHeader';
import { swrKeys } from '@/utils/constants';

export interface TableCompProps extends TableHeaderProps, TableProps {
  page: number;
  columns: { label: string; key: string }[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  fetcher: () => Promise<any>;
}

const TableComp: React.FC<TableCompProps> = ({
  page,
  columns,
  setPage,
  fetcher,
  ...rest
}) => {
  const { data, isLoading } = useSWR(`${swrKeys.EMPLOYEES}-${page}`, fetcher, {
    keepPreviousData: true,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
  });

  const rowsPerPage = 10;

  const pages = useMemo(() => {
    return data?.count ? Math.ceil(data.count / rowsPerPage) : 0;
  }, [data?.count, rowsPerPage]);

  const loadingState =
    isLoading || data?.results?.length === 0 ? 'loading' : 'idle';

  return (
    <section className="flex flex-col gap-3 overflow-hidden h-full">
      <TableHeaderComp {...rest} />
      <Table
        aria-label="Example table with client async pagination"
        selectionMode="multiple"
        color="primary"
        isHeaderSticky
        classNames={{ base: 'overflow-auto' }}
        bottomContent={
          pages > 0 ? (
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          ) : null
        }
        // {...args}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={data.results ?? []}
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
    </section>
  );
};
export default TableComp;
