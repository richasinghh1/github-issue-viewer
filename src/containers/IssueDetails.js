import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = (props) => {
  console.log(props, ':::::::::::::::::::::props')
  const listofissues = props.listofIssue.length && props.listofIssue.map((issue, id) => ({
    clickEvent:()=>props.handleClick(issue.title),
    name: issue.title
  }));
  console.log(listofissues, ':::::LISTG IFISSUES')
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        //sort: 'asc',
        width: '700px'
      }
    ],
    rows: listofissues ? listofissues : []
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
      searching={false}
      
    />
  );
}

export default DatatablePage;