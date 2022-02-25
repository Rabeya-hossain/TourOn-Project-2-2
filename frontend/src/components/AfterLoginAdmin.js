import React, {useState} from "react";
import MaterialTable from "material-table";
import AddIcon from "@material-ui/icons/Add";
import img1 from "../images/food.jpg"

import AdminDrawer from "./AdminDrawer";
import {render} from "react-dom";
import {hotel_id, room_idUpdate, room_typeUpdate} from "./FirstPageAdmin";
import axios from "axios";
const AfterLoginAdmin=()=>
{
    console.log(room_idUpdate);

    const [TableData1, setTableData1] = useState(room_typeUpdate);
    const [TableData3, setTableData3] = useState(room_idUpdate);

    const columns1 = [
        {
            title: "Room_type",
            field: "Room_type",
            sorting: true,
            align: "center",
            filtering: true,
            cellStyle: {
                // background: "#009688",
                fontfamily: "corgette",
                height: 80,
                maxHeight: 80,
            },
            headerStyle: { color: "#fff" },
        },
        {
            title: "Cost_per_night",
            field: "Cost",
            sorting: true,
            type: "numeric",
            filtering: true,
            // cellStyle: { background: "#009688" },
            headerStyle: { color: "#fff" },
        },
        {
            title: "Image",
            field: "image",
            sorting: true,
            type: "link",
            filtering: true,
            // cellStyle: { background: "#009688" },
            headerStyle: { color: "#fff" },
        }


    ];

    const columns3 = [
        {
            title: "Room_type",
            field: "Room_type",
            sorting: true,
            align: "center",
            filtering: true,
            cellStyle: {
                // background: "#009688",
                fontfamily: "corgette",
                height: 80,
                maxHeight: 80,
            },
            headerStyle: { color: "#fff" },
        },
        {
            title: "Room_id",
            field: "Room_id",
            sorting: true,
            type: "numeric",
            filtering: true,
            // cellStyle: { background: "#009688" },
            headerStyle: { color: "#fff" },
        }

    ];
    const updateType=async(newData,oldData)=>{
        try{

            var res= axios.post('http://localhost:8080/adminRoomTypeUpdate',{
                data1:newData,
                data2:oldData,
                hotel_id:hotel_id
            })

        }
        catch(e){
            console.log(e);
        }
        // try{
        //
        //     var res=await axios.post('http://localhost:8080/adminhoteldetails',{
        //         hotel_id:hotel_id
        //     })
        //     console.log("in update :")
        //     console.log(res);
        //     var NewRoom_typeUpdate=[];
        //     for(var r in res.data.data1){
        //         var row=res.data.data1[r];
        //         NewRoom_typeUpdate.push({Room_type:row.ROOM_TYPE,Cost:row.COST_PER_NIGHT,image:row.IMAGE});
        //     }
        //     console.log(NewRoom_typeUpdate);
        //     setTableData1([...NewRoom_typeUpdate])
        //
        // }
        // catch(e){
        //     console.log(e);
        // }



    }
    const addType=async(newData)=>{
        console.log(newData);
        try{

            var res=await axios.post('http://localhost:8080/adminRoomTypeAdd',{
                hotel_id:hotel_id,
                    room_type:newData.Room_type,
                    cost:newData.Cost,
                    image:newData.image

            })

        }
        catch(e){
            console.log(e);
        }

        // try{
        //
        //     var res=await axios.post('http://localhost:8080/adminhoteldetails',{
        //         hotel_id:hotel_id
        //     })
        //     console.log("in update :")
        //     console.log(res);
        //     var NewRoom_idUpdate=[];
        //     for(var r in res.data.data2){
        //         var row=res.data.data2[r];
        //         NewRoom_idUpdate.push({Room_type:row.ROOM_TYPE,Room_id:row.ROOOM_ID});
        //     }
        //     console.log(NewRoom_idUpdate);
        //     setTableData3([...NewRoom_idUpdate])
        //
        // }
        // catch(e){
        //     console.log(e);
        // }

    }

    const addRoom=async(newData)=>{
        console.log(newData);
        try{

            var res=await axios.post('http://localhost:8080/adminRoomAdd',{
                hotel_id:hotel_id,
                room_type:newData.Room_type,
                room_id:newData.Room_id
            })
            if(res.data.status=="notSuccess")
            {
                alert(res.data.error);
            }
            else
            {
                setTableData3([...TableData3, newData]);
                console.log("not setting");
            }

        }
        catch(e){
            console.log(e);
        }

    }
    const deleteRoom=async(index,dataDelete,newData)=>{
        console.log(newData);
        try{

            var res=await axios.post('http://localhost:8080/adminRoomDelete',{
                hotel_id:hotel_id,
                room_id:newData.Room_id
            })
            if(res.data.status=="notSuccess")
            {
                alert(res.data.error);
            }
            else
            {
                dataDelete.splice(index, 1);
                setTableData3([...dataDelete]);
            }

        }
        catch(e){
            console.log(e);
        }

    }


    return(
        <div>
            <AdminDrawer/>
            <MaterialTable
                title="Room information updating"
                data={TableData1}
                columns={columns1}

                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                // const dataUpdate = [...TableData1];

                                if(newData.Room_type.length==0 || newData.image.length==0 || isNaN(newData.Cost)) {
                                    alert("please give valid information in each field");
                                    resolve();
                                }
                                else {

                                    setTableData1([...TableData1,newData]);
                                    resolve();
                                    addType(newData);
                                }
                            }, 500);

                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataUpdate = [...TableData1];
                                const index = oldData.tableData.id;
                                console.log(newData.Cost);
                                if(newData.Room_type.length==0 || newData.image.length==0 || isNaN(newData.Cost)) {
                                    alert("please give valid information in each field");
                                    resolve();
                                }
                                else {

                                    updateType(newData,oldData)
                                    dataUpdate[index] = newData;
                                    setTableData1([...dataUpdate]);
                                    resolve();

                                }
                            }, 500);

                        }),

                }}
                onSelectionChange={(selectedRows) => console.log(selectedRows)}

                options={{
                    sorting: true,
                    search: true,
                    searchFieldAlignment: "right",
                    searchAutoFocus: true,
                    searchFieldVariant: "standard",
                    filtering: true,
                    paging: true,
                    pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
                    pageSize: 5,
                    paginationType: "stepped",
                    showFirstLastPageButtons: false,
                    paginationPosition: "both",
                    exportButton: true,
                    exportAllData: true,
                    exportFileName: "TableData",
                    addRowPosition: "first",
                    actionsColumnIndex: -1,
                    selection: true,
                    showSelectAllCheckbox: false,
                    showTextRowsSelected: false,
                    selectionProps: (rowData) => ({
                        // disabled: rowData.age == null,
                        // color:"primary"
                    }),
                    grouping: true,
                    columnsButton: true,
                    rowStyle: (data, index) =>
                        index % 2 === 0 ? { background: "#f5f5f5" } : {backgroundColor: "#EEE"},
                    headerStyle: {
                        backgroundColor: '#01579b',
                        color: '#FFF'}
                }}
                /*icons={{ Add: () => <AddIcon /> }}*/
            />

            <MaterialTable
                title="Add or delete rooms"
                data={TableData3}
                columns={columns3}

                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                 if(isNaN(newData.Room_id)){
                                    alert("please insert valid room id")
                                    resolve();
                                }
                                else
                                {
                                    //setTableData3([...TableData3, newData]);

                                    addRoom(newData);
                                    resolve();

                                }


                            }, 500);
                        }),
                    // onRowAdd: (newData) =>
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                    //             const dataUpdate = [...TableData1];
                    //
                    //             if(newData.Room_type.length==0 || newData.image.length==0 || isNaN(newData.Cost)) {
                    //                 alert("please give valid information in each field");
                    //                 resolve();
                    //             }
                    //             else {
                    //                 // console.log(newData);
                    //                 // setTableData3([...TableData3,newData]);
                    //                 // resolve();
                    //                 addType(newData);
                    //                 resolve();
                    //             }
                    //         }, 500);
                    //
                    //     }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve, reject) => {
                            let contactId = oldData.ID;
                            setTimeout(() => {
                                const dataDelete = [...TableData3];
                                const index = oldData.tableData.id;
                                deleteRoom(index,dataDelete,oldData);


                                resolve();
                            }, 1000);
                            // let url = `http://localhost:8080/api/people/${contactId}`;
                            // axios.delete(url).then((res) => {
                            //     //     console.log("res", res);
                            // });
                        }),
                }}
                onSelectionChange={(selectedRows) => console.log(selectedRows)}

                options={{
                    sorting: true,
                    search: true,
                    searchFieldAlignment: "right",
                    searchAutoFocus: true,
                    searchFieldVariant: "standard",
                    filtering: true,
                    paging: true,
                    pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
                    pageSize: 5,
                    paginationType: "stepped",
                    showFirstLastPageButtons: false,
                    paginationPosition: "both",
                    exportButton: true,
                    exportAllData: true,
                    exportFileName: "TableData",
                    addRowPosition: "first",
                    actionsColumnIndex: -1,
                    selection: true,
                    showSelectAllCheckbox: false,
                    showTextRowsSelected: false,
                    selectionProps: (rowData) => ({
                        // disabled: rowData.age == null,
                        // color:"primary"
                    }),
                    grouping: true,
                    columnsButton: true,
                    rowStyle: (data, index) =>
                        index % 2 === 0 ? { background: "#f5f5f5" } : {backgroundColor: "#EEE"},
                    headerStyle: {
                        backgroundColor: '#01579b',
                        color: '#FFF'}
                }}
                icons={{ Add: () => <AddIcon /> }}
            />
        </div>
    )
}
export default AfterLoginAdmin