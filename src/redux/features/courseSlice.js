import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name : "courseSlice",
    initialState : {
        courses : [
            {
                "id" : 1,
                "image" : "https://searchengineland.com/figz/wp-content/seloads/2020/11/agile-development-process-ss-1920.png",
                "courseName" : "Web Stratagy",
                "mentor" : "John Abraham",
                "price" : 49 ,
                "courseDetails1":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam alias earum similique natus enim fugit, ratione voluptates delectus in aperiam quibusdam cupiditate neque quae autem accusantium, reiciendis aliquid fugiat officiis ab, harum nostrum deserunt! Ea, quasi doloremque. Perspiciatis sapiente enim, illum reiciendis, harum nisi quidem, voluptas minus excepturi delectus odit.",
                "courseDetails2":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vero cupiditate iure corrupti, voluptatibus velit vel? Rem deserunt amet excepturi culpa saepe accusamus temporibus delectus harum aut nostrum corporis sed nemo optio reiciendis consequatur adipisci, illum ipsa quas? Quia, numquam quibusdam sit, veniam, laborum eveniet officiis recusandae totam nostrum maxime mollitia non vitae molestiae aliquid eligendi consequuntur porro eos nesciunt fuga. Dolore voluptate optio eaque commodi ducimus, incidunt consequuntur minus vero. Neque ipsa omnis libero illo aspernatur soluta maxime quos quisquam sequi distinctio maiores optio quod molestiae quibusdam placeat, ea corrupti necessitatibus commodi inventore doloribus fugiat sunt exercitationem? Labore, corporis.",
                "courseDetails3": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem tempore veniam quasi culpa voluptatem soluta, praesentium deleniti ab qui enim, repudiandae architecto officia molestiae. Aspernatur at facere dicta ea sit cumque accusamus praesentium qui porro, ipsum corporis. Quibusdam, accusamus."
            },
            {
                "id": 2 ,
                "image" : "https://www.springboard.com/library/static/634f31508679a917f5c5a1d6306569f8/d8f20/women-in-ux-ui-design.jpg" ,
                "courseName":"UI/UX Design",
                "mentor":"Kettle Lin",
                "price" : 60,
                "courseDetails1":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam alias earum similique natus enim fugit, ratione voluptates delectus in aperiam quibusdam cupiditate neque quae autem accusantium, reiciendis aliquid fugiat officiis ab, harum nostrum deserunt! Ea, quasi doloremque. Perspiciatis sapiente enim, illum reiciendis, harum nisi quidem, voluptas minus excepturi delectus odit.",
                "courseDetails2":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vero cupiditate iure corrupti, voluptatibus velit vel? Rem deserunt amet excepturi culpa saepe accusamus temporibus delectus harum aut nostrum corporis sed nemo optio reiciendis consequatur adipisci, illum ipsa quas? Quia, numquam quibusdam sit, veniam, laborum eveniet officiis recusandae totam nostrum maxime mollitia non vitae molestiae aliquid eligendi consequuntur porro eos nesciunt fuga. Dolore voluptate optio eaque commodi ducimus, incidunt consequuntur minus vero. Neque ipsa omnis libero illo aspernatur soluta maxime quos quisquam sequi distinctio maiores optio quod molestiae quibusdam placeat, ea corrupti necessitatibus commodi inventore doloribus fugiat sunt exercitationem? Labore, corporis.",
                "courseDetails3": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem tempore veniam quasi culpa voluptatem soluta, praesentium deleniti ab qui enim, repudiandae architecto officia molestiae. Aspernatur at facere dicta ea sit cumque accusamus praesentium qui porro, ipsum corporis. Quibusdam, accusamus."
            },
            {
                "id":3,
                "image":"https://w3-lab.com/wp-content/uploads/2019/12/Get-the-Most-Fancied-Web-Development-Services-min-scaled.jpg",
                "courseName":"Web Design",
                "mentor":"Jhankar Mahbub",
                "price" : 60,
                "courseDetails1":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam alias earum similique natus enim fugit, ratione voluptates delectus in aperiam quibusdam cupiditate neque quae autem accusantium, reiciendis aliquid fugiat officiis ab, harum nostrum deserunt! Ea, quasi doloremque. Perspiciatis sapiente enim, illum reiciendis, harum nisi quidem, voluptas minus excepturi delectus odit.",
                "courseDetails2":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vero cupiditate iure corrupti, voluptatibus velit vel? Rem deserunt amet excepturi culpa saepe accusamus temporibus delectus harum aut nostrum corporis sed nemo optio reiciendis consequatur adipisci, illum ipsa quas? Quia, numquam quibusdam sit, veniam, laborum eveniet officiis recusandae totam nostrum maxime mollitia non vitae molestiae aliquid eligendi consequuntur porro eos nesciunt fuga. Dolore voluptate optio eaque commodi ducimus, incidunt consequuntur minus vero. Neque ipsa omnis libero illo aspernatur soluta maxime quos quisquam sequi distinctio maiores optio quod molestiae quibusdam placeat, ea corrupti necessitatibus commodi inventore doloribus fugiat sunt exercitationem? Labore, corporis.",
                "courseDetails3": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem tempore veniam quasi culpa voluptatem soluta, praesentium deleniti ab qui enim, repudiandae architecto officia molestiae. Aspernatur at facere dicta ea sit cumque accusamus praesentium qui porro, ipsum corporis. Quibusdam, accusamus."
            },
            {
                "id":4,
                "image":"https://winbridgebd.com/images/web.jpeg",
                "courseName":"Web Development",
                "mentor":"Sajib Hossan",
                "price" : 45,
                "courseDetails1":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam alias earum similique natus enim fugit, ratione voluptates delectus in aperiam quibusdam cupiditate neque quae autem accusantium, reiciendis aliquid fugiat officiis ab, harum nostrum deserunt! Ea, quasi doloremque. Perspiciatis sapiente enim, illum reiciendis, harum nisi quidem, voluptas minus excepturi delectus odit.",
                "courseDetails2":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vero cupiditate iure corrupti, voluptatibus velit vel? Rem deserunt amet excepturi culpa saepe accusamus temporibus delectus harum aut nostrum corporis sed nemo optio reiciendis consequatur adipisci, illum ipsa quas? Quia, numquam quibusdam sit, veniam, laborum eveniet officiis recusandae totam nostrum maxime mollitia non vitae molestiae aliquid eligendi consequuntur porro eos nesciunt fuga. Dolore voluptate optio eaque commodi ducimus, incidunt consequuntur minus vero. Neque ipsa omnis libero illo aspernatur soluta maxime quos quisquam sequi distinctio maiores optio quod molestiae quibusdam placeat, ea corrupti necessitatibus commodi inventore doloribus fugiat sunt exercitationem? Labore, corporis.",
                "courseDetails3": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem tempore veniam quasi culpa voluptatem soluta, praesentium deleniti ab qui enim, repudiandae architecto officia molestiae. Aspernatur at facere dicta ea sit cumque accusamus praesentium qui porro, ipsum corporis. Quibusdam, accusamus."
            },
            {
                "id":5,
                "image":"https://www.thebalancecareers.com/thmb/Gw1bx3nk6HcayinpNT3n_5MisE0=/1885x1414/smart/filters:no_upscale()/digital-marketing-1222811180-3968de5d1f19400a88b1e5e44cd9fae4.jpg",
                "courseName":"Digital Marketing",
                "mentor":"Sajib Hossan",
                "price" : 30,
                "courseDetails1":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam alias earum similique natus enim fugit, ratione voluptates delectus in aperiam quibusdam cupiditate neque quae autem accusantium, reiciendis aliquid fugiat officiis ab, harum nostrum deserunt! Ea, quasi doloremque. Perspiciatis sapiente enim, illum reiciendis, harum nisi quidem, voluptas minus excepturi delectus odit.",
                "courseDetails2":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vero cupiditate iure corrupti, voluptatibus velit vel? Rem deserunt amet excepturi culpa saepe accusamus temporibus delectus harum aut nostrum corporis sed nemo optio reiciendis consequatur adipisci, illum ipsa quas? Quia, numquam quibusdam sit, veniam, laborum eveniet officiis recusandae totam nostrum maxime mollitia non vitae molestiae aliquid eligendi consequuntur porro eos nesciunt fuga. Dolore voluptate optio eaque commodi ducimus, incidunt consequuntur minus vero. Neque ipsa omnis libero illo aspernatur soluta maxime quos quisquam sequi distinctio maiores optio quod molestiae quibusdam placeat, ea corrupti necessitatibus commodi inventore doloribus fugiat sunt exercitationem? Labore, corporis.",
                "courseDetails3": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem tempore veniam quasi culpa voluptatem soluta, praesentium deleniti ab qui enim, repudiandae architecto officia molestiae. Aspernatur at facere dicta ea sit cumque accusamus praesentium qui porro, ipsum corporis. Quibusdam, accusamus."
            }
        ],
        course : {
            id : "",
            image : "",
            courseName : "",
            mentor : "",
            price : "",
            courseDetails1:"",
            courseDetails2:"",
            courseDetails3: ""
        },
        cart : [

        ],
    },
    reducers : {
        getCourse : (state, action) => {
            const id = action.payload.id;
            state.course = state.courses.find(course => course.id === parseInt(id))
        },
        clearCourse : (state) => {
            state.course = {
                id : "",
                image : "",
                courseName : "",
                mentor : "",
                price : "",
                courseDetails1:"",
                courseDetails2:"",
                courseDetails3: ""
            }
        },
        addToCart : (state, action) => {
            const course = action.payload;
            state.cart = [ ...state.cart, course];
        },
        deletItemFromCart : (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        }
        
    }
})

export const { getCourse, clearCourse , addToCart, deletItemFromCart} = courseSlice.actions;

export default courseSlice.reducer;