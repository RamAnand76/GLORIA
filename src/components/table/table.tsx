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
  dataRows: { count: number; results: any[] };
  isLoading?: boolean;
}

const TableComp: React.FC<TableCompProps> = ({
  dataRows: data,
  isLoading = false,
  ...rest
}) => {
  const [page, setPage] = React.useState(1);

  // const { data, isLoading } = useSWR(
  //   `https://swapi.py4e.com/api/people?page=${page}`,
  //   fetcher,
  //   {
  //     keepPreviousData: true,
  //   }
  // );

  const columns = [
    {
      key: 'name',
      label: 'NAME',
    },
    {
      key: 'role',
      label: 'ROLE',
    },
    {
      key: 'status',
      label: 'STATUS',
    },
  ];

  const rowsPerPage = 10;

  const pages = useMemo(() => {
    return data?.count ? Math.ceil(data.count / rowsPerPage) : 0;
  }, [data?.count, rowsPerPage]);

  const loadingState =
    isLoading || data?.results.length === 0 ? 'loading' : 'idle';

  return (
    <section className="flex flex-col gap-3">
      <TableHeaderComp {...rest} />
      <Table
        aria-label="Example table with client async pagination"
        selectionMode="multiple"
        color="primary"
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
