import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.jpg'
import menu_2 from './menu_2.jpg'
import menu_3 from './menu_3.jpg'
import menu_4 from './menu_4.jpg'
import menu_5 from './menu_5.jpg'
import menu_6 from './menu_6.jpg'
import menu_7 from './menu_7.jpg'
import menu_8 from './menu_8.jpg'

import food_1 from './food_1.png'
import food_2 from './food_2.png'
import food_3 from './food_3.png'
import food_4 from './food_4.png'
import food_5 from './food_5.png'
import food_6 from './food_6.png'
import food_7 from './food_7.png'
import food_8 from './food_8.png'
import food_9 from './food_9.png'
import food_10 from './food_10.png'
import food_11 from './food_11.png'
import food_12 from './food_12.png'
import food_13 from './food_13.png'
import food_14 from './food_14.png'
import food_15 from './food_15.png'
import food_16 from './food_16.png'
import food_17 from './food_17.png'
import food_18 from './food_18.png'
import food_19 from './food_19.png'
import food_20 from './food_20.png'
import food_21 from './food_21.png'
import food_22 from './food_22.png'
import food_23 from './food_23.png'
import food_24 from './food_24.png'
import food_25 from './food_25.png'
import food_26 from './food_26.png'
import food_27 from './food_27.png'
import food_28 from './food_28.png'
import food_29 from './food_29.png'
import food_30 from './food_30.png'
import food_31 from './food_31.png'
import food_32 from './food_32.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export const menu_list = [
    {
        menu_name: "เมนูผัด",
        menu_image: menu_1
    },
    {
        menu_name: "เมนูต้ม / แกง",
        menu_image: menu_2
    },
    {
        menu_name: "เมนูทอด",
        menu_image: menu_3
    },
    {
        menu_name: "เมนูราดข้าว / จานเดียว",
        menu_image: menu_4
    },
    {
        menu_name: "เมนูเส้น",
        menu_image: menu_5
    },
    {
        menu_name: "ยำ / ลาบ",
        menu_image: menu_6
    },
    {
        menu_name: "ของหวาน",
        menu_image: menu_7
    },
    {
        menu_name: "เครื่องดื่ม",
        menu_image: menu_8
    }]

export const food_list = [
    {
        _id: "1",
        name: "กระเพรา",
        image: food_1,
        price: 50,
        description: "ผัดกระเพราหอมๆ",
        category: "เมนูผัด",
        options: {
            "เลือกเนื้อ": ["หมู", "ไก่", "ทะเล", "หมูกรอบ"],
            "ระดับความเผ็ด": ["ไม่เผ็ด", "เผ็ดน้อย", "เผ็ดกลาง", "เผ็ดมาก"],
            "ไข่ดาว": ["ไม่ใส่", "ใส่ไข่ดาว"]
        }
    },
    {
        _id: "2",
        name: "ผัดคะน้า",
        image: food_2,
        price: 45,
        description: "ผัดคะน้ากรอบอร่อย",
        category: "เมนูผัด",
        options: {
            "เลือกเนื้อ": ["หมู", "ไก่", "ทะเล"],
            "ขนาด": ["ธรรมดา", "พิเศษ"]
        }
    },
    {
        _id: "3",
        name: "ผัดพริกแกง",
        image: food_3,
        price: 45,
        description: "ผัดพริกแกงเข้มข้น",
        category: "เมนูผัด",
        options: {
            "เลือกเนื้อ": ["หมู", "ไก่", "ทะเล"],
            "ระดับความเผ็ด": ["เผ็ดน้อย", "เผ็ดกลาง", "เผ็ดมาก"]
        }
    },
    {
        _id: "4",
        name: "ผัดกระเทียมพริกไทย",
        image: food_4,
        price: 50,
        description: "กระเทียมหอมพริกไทย",
        category: "เมนูผัด",
        options: {
            "เลือกเนื้อ": ["หมู", "ไก่", "ทะเล"],
            "ไข่ดาว": ["ไม่ใส่", "ใส่ไข่ดาว"]
        }
    },
    {
        _id: "5",
        name: "ต้มยำกุ้ง",
        image: food_5,
        price: 90,
        description: "ต้มยำรสจัด",
        category: "เมนูต้ม / แกง",
        options: {
            "ขนาด": ["ถ้วย", "หม้อเล็ก", "หม้อใหญ่"],
            "ระดับความเผ็ด": ["เผ็ดน้อย", "เผ็ดกลาง", "เผ็ดมาก"]
        }
    },
    {
        _id: "6",
        name: "ต้มจืดเต้าหู้หมูสับ",
        image: food_6,
        price: 70,
        description: "ต้มจืดซดคล่องคอ",
        category: "เมนูต้ม / แกง",
        options: {
            "ขนาด": ["ถ้วย", "หม้อ"],
            "เพิ่มไข่": ["ไม่เพิ่ม", "เพิ่มไข่"]
        }
    },
    {
        _id: "7",
        name: "ต้มข่าไก่",
        image: food_7,
        price: 85,
        description: "ต้มข่าเข้มข้น",
        category: "เมนูต้ม / แกง",
        options: {
            "ขนาด": ["ถ้วย", "หม้อ"],
            "ระดับความเผ็ด": ["น้อย", "กลาง", "มาก"]
        }
    },
    {
        _id: "8",
        name: "แกงพะแนง",
        image: food_8,
        price: 80,
        description: "พะแนงเข้มข้น",
        category: "เมนูต้ม / แกง",
        options: {
            "เลือกเนื้อ": ["หมู", "ไก่", "เนื้อ"],
            "ระดับความเผ็ด": ["น้อย", "กลาง", "มาก"]
        }
    },
    {
        _id: "9",
        name: "ไก่ทอด",
        image: food_9,
        price: 60,
        description: "ไก่ทอดกรอบ",
        category: "เมนูทอด",
        options: {
            "ส่วน": ["น่อง", "ปีก", "สะโพก"],
            "ซอส": ["ไม่เอาซอส", "ซอสเผ็ด", "ซอสหวาน"]
        }
    },
    {
        _id: "10",
        name: "ปีกไก่ทอดน้ำปลา",
        image: food_10,
        price: 65,
        description: "ปีกไก่กรอบหอม",
        category: "เมนูทอด",
        options: {
            "จำนวน": ["5 ชิ้น", "10 ชิ้น"],
            "น้ำจิ้ม": ["ไม่เอา", "เอา"]
        }
    },
    {
        _id: "11",
        name: "กุ้งชุบแป้งทอด",
        image: food_11,
        price: 75,
        description: "กุ้งกรอบ",
        category: "เมนูทอด",
        options: {
            "จำนวน": ["6 ตัว", "12 ตัว"],
            "ซอส": ["ซอสพริก", "มายองเนส"]
        }
    },
    {
        _id: "12",
        name: "หมูสามชั้นทอดกรอบ",
        image: food_12,
        price: 80,
        description: "หมูกรอบสะใจ",
        category: "เมนูทอด",
        options: {
            "ขนาด": ["ธรรมดา", "พิเศษ"],
            "น้ำจิ้ม": ["แจ่ว", "ซีฟู้ด"]
        }
    },
    {
        _id: "13",
        name: "ข้าวหมูแดง",
        image: food_13,
        price: 50,
        description: "หมูแดงหอม",
        category: "เมนูราดข้าว / จานเดียว",
        options: {
            "ไข่": ["ไม่ใส่", "ไข่ต้ม", "ไข่ดาว"],
            "ขนาด": ["ธรรมดา", "พิเศษ"]
        }
    },
    {
        _id: "14",
        name: "ข้าวมันไก่",
        image: food_14,
        price: 50,
        description: "ข้าวมันไก่นุ่ม",
        category: "เมนูราดข้าว / จานเดียว",
        options: {
            "ส่วนไก่": ["เนื้อ", "หนัง", "ผสม"],
            "ขนาด": ["ธรรมดา", "พิเศษ"]
        }
    },
    {
        _id: "15",
        name: "ข้าวขาหมู",
        image: food_15,
        price: 60,
        description: "ขาหมูนุ่ม",
        category: "เมนูราดข้าว / จานเดียว",
        options: {
            "ไข่": ["ไม่ใส่", "ไข่พะโล้"],
            "ขนาด": ["ธรรมดา", "พิเศษ"]
        }
    },
    {
        _id: "16",
        name: "ข้าวมันไก่ทอด",
        image: food_16,
        price: 60,
        description: "ไก่ทอดกรอบ",
        category: "เมนูราดข้าว / จานเดียว",
        options: {
            "ซอส": ["หวาน", "เผ็ด"],
            "ขนาด": ["ธรรมดา", "พิเศษ"]
        }
    },
    {
        _id: "17",
        name: "ผัดไทย",
        image: food_17,
        price: 60,
        description: "ผัดไทยสูตรโบราณ",
        category: "เมนูเส้น",
        options: {
            "เลือกเส้น": ["เส้นเล็ก", "วุ้นเส้น"],
            "เลือกเนื้อ": ["กุ้ง", "ไก่", "หมู"]
        }
    },
    {
        _id: "18",
        name: "ราดหน้า",
        image: food_18,
        price: 55,
        description: "ราดหน้าเข้มข้น",
        category: "เมนูเส้น",
        options: {
            "เลือกเส้น": ["เส้นใหญ่", "หมี่กรอบ"],
            "เลือกเนื้อ": ["หมู", "ไก่", "ทะเล"]
        }
    },
    {
        _id: "19",
        name: "ก๋วยเตี๋ยว",
        image: food_19,
        price: 50,
        description: "ก๋วยเตี๋ยวร้อนๆ",
        category: "เมนูเส้น",
        options: {
            "เลือกเส้น": ["เส้นเล็ก", "เส้นใหญ่", "บะหมี่", "วุ้นเส้น"],
            "เลือกเนื้อ": ["หมู", "ไก่", "เนื้อ"],
            "ขนาด": ["ธรรมดา", "พิเศษ"]
        }
    },
    {
        _id: "20",
        name: "สุกี้",
        image: food_20,
        price: 60,
        description: "สุกี้ร้อนๆ",
        category: "เมนูเส้น",
        options: {
            "แบบ": ["แห้ง", "น้ำ"],
            "เลือกเนื้อ": ["หมู", "ไก่", "ทะเล"]
        }
    },
    {
        _id: "21",
        name: "ยำวุ้นเส้น",
        image: food_21,
        price: 70,
        description: "ยำรสแซ่บ",
        category: "ยำ / ลาบ",
        options: {
            "ระดับความเผ็ด": ["น้อย", "กลาง", "มาก"],
            "ใส่ปลาร้า": ["ไม่ใส่", "ใส่"]
        }
    },
    {
        _id: "22",
        name: "ยำทะเล",
        image: food_22,
        price: 90,
        description: "ยำทะเลสด",
        category: "ยำ / ลาบ",
        options: {
            "ระดับความเผ็ด": ["น้อย", "กลาง", "มาก"],
            "ใส่ปลาร้า": ["ไม่ใส่", "ใส่"]
        }
    },
    {
        _id: "23",
        name: "ยำหมูยอ",
        image: food_23,
        price: 60,
        description: "หมูยอแซ่บ",
        category: "ยำ / ลาบ",
        options: {
            "ระดับความเผ็ด": ["น้อย", "กลาง", "มาก"],
            "เพิ่มไข่แดง": ["ไม่เพิ่ม", "เพิ่ม"]
        }
    },
    {
        _id: "24",
        name: "ลาบ",
        image: food_24,
        price: 70,
        description: "ลาบรสจัด",
        category: "ยำ / ลาบ",
        options: {
            "เลือกเนื้อ": ["หมู", "ไก่", "เนื้อ"],
            "ระดับความเผ็ด": ["น้อย", "กลาง", "มาก"]
        }
    },
    {
        _id: "25",
        name: "ข้าวเหนียวมะม่วง",
        image: food_25,
        price: 80,
        description: "หวานมัน",
        category: "ของหวาน",
        options: {
            "ขนาด": ["เล็ก", "ใหญ่"]
        }
    },
    {
        _id: "26",
        name: "เฉาก๊วย",
        image: food_26,
        price: 40,
        description: "เฉาก๊วยเย็นๆ",
        category: "ของหวาน",
        options: {
            "ท็อปปิ้ง": ["นมสด", "น้ำเชื่อม", "ไม่ใส่"]
        }
    },
    {
        _id: "27",
        name: "ไอศกรีม",
        image: food_27,
        price: 50,
        description: "ไอศกรีมเย็นชื่นใจ",
        category: "ของหวาน",
        options: {
            "รสชาติ": ["วานิลลา", "ช็อกโกแลต", "สตรอว์เบอร์รี่"],
            "ขนาด": ["1 ลูก", "2 ลูก"]
        }
    },
    {
        _id: "28",
        name: "ลอดช่อง",
        image: food_28,
        price: 45,
        description: "ลอดช่องหวานมัน",
        category: "ของหวาน",
        options: {
            "น้ำกะทิ": ["ปกติ", "หวานน้อย"]
        }
    },
    {
        _id: "29",
        name: "ชาไทย",
        image: food_29,
        price: 35,
        description: "ชาไทยเข้มข้น",
        category: "เครื่องดื่ม",
        options: {
            "ระดับความหวาน": ["0%", "25%", "50%", "75%", "100%"],
            "น้ำแข็ง": ["ปกติ", "น้อย", "ไม่ใส่"]
        }
    },
    {
        _id: "30",
        name: "น้ำอัดลม",
        image: food_30,
        price: 25,
        description: "เย็นซ่า",
        category: "เครื่องดื่ม",
        options: {
            "รส": ["โค้ก", "แฟนต้า", "สไปรท์"],
            "ขนาด": ["กระป๋อง", "ขวด"]
        }
    },
    {
        _id: "31",
        name: "เบียร์",
        image: food_31,
        price: 80,
        description: "เบียร์เย็นๆ",
        category: "เครื่องดื่ม",
        options: {
            "ขนาด": ["เล็ก", "ใหญ่"]
        }
    },
    {
        _id: "32",
        name: "น้ำเปล่า",
        image: food_32,
        price: 15,
        description: "น้ำดื่มสะอาด",
        category: "เครื่องดื่ม",
        options: {
            "ขนาด": ["ขวดเล็ก", "ขวดใหญ่"]
        }
    }
]
