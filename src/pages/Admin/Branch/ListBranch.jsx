import React, { useEffect, useState } from "react";
import {
  Footer,
  Header,
  Navbar,
  Sidebar,
  ThemeSettings,
} from "../../../components/Admin";
import "../Admin.css";
import { useStateContext } from "../../../contexts/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
// import { getListAllCategory } from '../../../service/Admin/Category';
import { getListAllBranch } from "../../../service/Admin/Branch";

const ListBranch = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    let promise;
    promise = getListAllBranch();
    promise
      .then((response) => {
        setLstBranch(response);
      })
      .catch((error) => {
        console.log(error);
      });
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const [lstBranch, setLstBranch] = useState([]);

  // const linkCreateCategory = () => {
  //     window.location.replace('admin/create-update-category')
  // }

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
          <div>
            {themeSettings && <ThemeSettings />}

            <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
              <Header category="Admin" title="Danh s??ch nh??n h??ng" />
              {/* <button className='btn btn-primary' onClick={() => linkCreateCategory()}>T???o m???i</button> */}
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr className="text-center">
                    <th>STT</th>
                    <th>T??n nh??n h??ng</th>
                    <th>Ng?????i t???o</th>
                    <th>Ng??y t???o</th>
                    {/* <th colSpan="2">L???a ch???n</th> */}
                  </tr>
                </thead>
                <tbody classNameName="list">
                  {lstBranch.map((b, index) => (
                    <tr key={b.id} className="text-center">
                      <td>{index + 1}</td>
                      <td>{b.branch_name}</td>
                      <td>{b.create_by_name}</td>
                      <td>{b.create_date}</td>
                      {/* <td className="text-center">
                                                <i className='fa fa-edit' style={{ 'cursor': 'pointer' }} onClick={() => { this.updateCategory(c) }}></i>
                                            </td>
                                            <td>
                                                <i className='fa fa-trash' style={{ 'cursor': 'pointer', 'color': 'red' }} data-toggle="modal" data-target="#exampleModal" onClick={() => { this.deleteCategory(c) }}></i>
                                            </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default ListBranch;
