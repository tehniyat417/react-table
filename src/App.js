
import './App.css';
import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';
import { Search } from 'react-bootstrap-table2-toolkit';


class App extends Component {
  render() {
    const { ExportCSVButton } = CSVExport;
    const { SearchBar } = Search;

    const dataSource = [
      { id: 1, name: 'Headphone  Fusion', value: '100' },
      { id: 2, name: 'Headphone Beats', value: '80' },
      { id: 3, name: 'Headphone Modus', value: '70' },
      { id: 4, name: 'Headphone Jam', value: '100' },
      { id: 5, name: 'Headphone Auto', value: '50' },
      { id: 6, name: 'Headphone Byte', value: '70' },
      { id: 7, name: 'Headphone Duo', value: '150' },
      { id: 8, name: 'Headphone Modular', value: '80' },
      { id: 9, name: 'Headphone Pivot', value: '150' },
      { id: 10, name: 'Headphone Optimizer', value: '70' },
      { id: 11, name: 'Headphone Rave', value: '50' },
      { id: 12, name: 'Headphone Mach', value: '40' }
    ];
    const columns = [{
      dataField: 'id',
      text: 'Product ID',
      style:{backgroundColor:"blue"}

    }, {
      dataField: 'name',
      text: 'Product Name',
      style: { backgroundColor: "#00afb9" },
      sort: true
    }, {
      dataField: 'value',
      text: 'Product value',
      style:{backgroundColor:"blue"}

    }];
    const expandRow = {
      renderer: (row, rowIndex) => (
        <div>
          <p>{`This Expand row is belong to rowKey ${row.id}`}</p>
          <p>You can render anything here, also you can add additional data on every row object</p>
          <p>expandRow.renderer callback will pass the origin row object to you</p>
        </div>
      )
    };
    const options = {
      page: 1,
      sizePerPage: 5,
      nextPageText: '>',
      prePageText: '<',
      showTotal: true
    };
 
  

    return (
      <div className="App">
        <p className="Table-header">REXO</p>
       <ToolkitProvider
        keyField="id"
        data={ dataSource }
        columns={ columns }
        expandRow={ expandRow }
        exportCSV
        search
 >
     {
    props => (
      <div>
        <ExportCSVButton  { ...props.csvProps }>Export CSV!!</ExportCSVButton>
        <h3>Search anything below:</h3>
        <SearchBar { ...props.searchProps } />
        <hr />
 
        <hr />
        <BootstrapTable
                 
                pagination={paginationFactory()}
                {...props.baseProps}
              />
      </div>
    )
     }
</ToolkitProvider>
      </div>
    );
  }

}
export default App;
