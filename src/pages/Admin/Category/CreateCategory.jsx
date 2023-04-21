import React, { useEffect, useState } from 'react';
import { Footer, Header, Navbar, Sidebar, ThemeSettings } from '../../../components/Admin';
import "../Admin.css";
import { useStateContext } from '../../../contexts/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import { getCategoryById, saveCategory, updateCategory } from '../../../service/Admin/Category';
import { showNotification } from '../../../service/NotificationService';
import { useParams } from 'react-router-dom';

const CreateUpdateCategory = () => {
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
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }
        console.log(categoryId.id);
        if (categoryId.id !== undefined) {
            let promise;
            promise = getCategoryById(categoryId.id);
            promise
                .then(response => {
                    setState((response[0].category_name).toString());
                }).catch(error => {
                    console.log(error)
                });
        }
    }, []);

    const [state, setState] = useState({
        category_name: '',

    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const save = () => {
        if(categoryId.id === undefined){
            saveCategory(state)
                .then(response => {
                    showNotification('Tạo danh mục thành công', 'success');
                    window.location.replace("http://localhost:3000/admin/manages-category")
                }).catch(error => {
                    console.log(error)
                    showNotification('Tạo danh mục thất bại!', 'danger');
                });
        }else{
            // Update category
            updateCategory(state, categoryId.id)
            .then(response => {
                showNotification('Cập nhật danh mục thành công', 'success');
                window.location.replace("http://localhost:3000/admin/manages-category")
            }).catch(error => {
                console.log(error)
                showNotification('Cập nhật danh mục thất bại!', 'danger');
            });
        }
    }

    const categoryId = useParams();

    return (
        <div className={currentMode === "Dark" ? "dark" : ""}>
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
                    <TooltipComponent content="Settings" position="Top">
                        <button
                            type="button"
                            onClick={() => setThemeSettings(true)}
                            style={{ background: currentColor, borderRadius: "50%" }}
                            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray">
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
                            <Header category="Admin" title="Tạo mới/Cập nhật danh mục" />
                            <form>
                                <div class="mb-3">
                                    <label class="form-label">Tên danh mục</label>
                                    <input type="text" class="form-control" placeholder="Tên danh mục" style={{ height: '44px', borderRadius: '6px' }} name="category_name" onChange={handleInputChange} value={state} />
                                </div>
                                <button type="button" class="btn btn-primary" onClick={() => save()}>Lưu</button>
                            </form>
                        </div>

                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};
export default CreateUpdateCategory;