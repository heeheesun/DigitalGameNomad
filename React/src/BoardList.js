import "./BoardFree.css";
import React, { useState, useEffect } from 'react';
import { useTable, useSortBy } from 'react-table';
import axios from "axios"; 
import board from './Data.js';

const BoardList = () => {
  const [dataList, setDataList] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  let board_1 = board().board;
  let num = 1;

 function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach((row) => {
      options.add(row.values[id])
    });
    return [...options.values()]
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined)

      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

 const columns = React.useMemo(
  () => [
    {
      Header: '',
      id: 'no',
      columns: [
        {
          Header: '글번호',
          accessor: (item) => {
            return [item.postTitle, item.postKey]
          },
          Cell: (e) => (<a href={`/BoardFreeSee/${e.value[1]}`}> {e.value[1]} </a>
          ),
        },
      ],
    },
    {
      Header: '',
      id: 'title',
      columns: [
        {
          Header: '제목',
          accessor: (item) => {
            return [item.postTitle, item.postKey];
          },
          Cell: (e) => (
          <a href={`/BoardFreeSee/${e.value[1]}`}> {e.value[0]} </a>
          ),
        },
      ],
    },
    {
      Header: '',
      id: 'createDate',
      columns: [
        {
          Header: '등록일',
          accessor: (item) => {
            return item.post_date;
          },
        },
      ],
    },
    {
      Header: '',
      id: 'createuser',
      columns: [
        {
          Header: '작성자',
          accessor: (item) => {
            return item.user.user_id;
          },
        },
      ],
    },
    {
      Header: '',
      id: 'readCount',
      columns: [
        {
          Header: '조회수',
          accessor: (item) => {
            return item.post_view;
          },
        },
      ],
    },
  ],
  []
);

  const data = [];
  const nameRef = React.createRef();
 
  useEffect(()=>{
    if(board_1[0] != "re") {
    setSearchValue("선택");
      setDataList(board_1.filter((e) => e.post_topic === "자유"));

  }
  }, [board_1]);

  
  
    dataList.map((item) => {
      dataList.filter((e) => e.post_topic == "자유");
      data.push(item);
    })
    
  function selectBoxChange(e) {

    setSearchValue(e.target.value);
  }

    //------------------검색 부분----------------------
  function search() {
    let input = nameRef;

    if(searchValue === "제목") {
    board_1.filter((e)=> e.postTitle == null).forEach((e)=> e.show = false);
    board_1.filter((e) => e.postTitle != null).filter((e)=> !e.postTitle.includes(input.current.value)).forEach((e)=>e.show = false);
    board_1.filter((e) => e.postTitle != null).filter((e)=> e.postTitle.includes(input.current.value)).forEach((e)=>e.show = true);
    }
    else if(searchValue === "내용") {
      board_1.filter((e)=> e.postText == null).forEach((e)=> e.show = false);
      board_1.filter((e) => e.postText != null).filter((e)=> !e.postText.includes(input.current.value)).forEach((e)=>e.show = false);
      board_1.filter((e) => e.postText != null).filter((e)=> e.postText.includes(input.current.value)).forEach((e)=>e.show = true);
      }
    else if(searchValue === "작성자") {
        board_1.filter((e)=> e.user.user_id == null).forEach((e)=> e.show = false);
        board_1.filter((e) => e.user.user_id != null).filter((e)=> !e.user.user_id.includes(input.current.value)).forEach((e)=>e.show = false);
        board_1.filter((e) => e.user.user_id != null).filter((e)=> e.user.user_id.includes(input.current.value)).forEach((e)=>e.show = true);
    }
    else {
      alert("검색기준을 설정해주세요");
      return;
    }


    setDataList(board_1.filter((e) => e.show === true && e.post_topic === "자유")
    );
  }

  //------------------- 리셋 부분---------------------
  function reset() {
    board_1.forEach((e) => { 
      e.show = true;
    });
    setDataList(
      board_1.filter((e) => e.show === true && e.post_topic === "자유")
    );
    setSearchValue("선택");
  }

  function Table({ columns, data }) {

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable(
      {
        columns,
        data,
      },
      useSortBy
    )
    // We don't want to render all 2000 rows for this example, so cap
    // it at 20 for this use case
    const firstPageRows = rows.slice(0, 20)

    return (
      <>

        <table className="common-table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  // Add the sorting props to control sorting. For this example
                  // we can add them into the header props
                  <th className="common-table-header-column" 
                  {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    {/* Add a sort direction indicator */}
                    <span className="b__span">
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {firstPageRows.map(
              (row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                        <td 
                        className="common-table-column" 
                        {...cell.getCellProps()}>
                          {cell.render('Cell')}
                          </td>
                      );
                    })}
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
        <br />

        <div className="b__lbox">
          <label className="center">
            <select
              className="free-select"
              onChange={selectBoxChange}
              value={searchValue}
            >
              <option value="선택">선택</option>
              <option value="제목">제목</option>
              <option value="내용">내용</option>
              <option value="작성자">작성자</option>
            </select>
            <input id="create_btn" type="text" name="title" ref={nameRef} />
            <input
              id="search_btn"
              type="button"
              value="검색"
              onClick={(e) => search()}
            />
            <input
              id="reset_btn"
              type="button"
              value="리셋"
              onClick={(e) => reset()}
            />
            <br />
          </label>
        </div>

      </>
    );
  }

    return (
      <>
        <Table columns={columns} data={data} />
      </>
    );
};

export default BoardList;