import baymarkImg from "../../assets/Screenshot 2024-09-26 233236.png";
import pokefinderImg from "../../assets/Screenshot 2024-09-28 183717.png";
import weatherImg from "../../assets/weather.png";
import attendanceImg from "../../assets/attendance.png";
import hotelImg from "../../assets/hotel.png";
import friendoImg from "../../assets/project1.png"; // <- add actual screenshot path
import westImg from "../../assets/project2.png"; // <- add actual screenshot path

// tech icons
import javaIcon from "../../assets/java.png";
import springIcon from "../../assets/spring.png";
import mysqlIcon from "../../assets/mysql.png";
import apiIcon from "../../assets/file.png";
import reactIcon from "../../assets/react.png";
import tailwindIcon from "../../assets/tailwind.png";
import azureIcon from "../../assets/azure.png";
import websocketIcon from "../../assets/websocket.png";
import axiosIcon from "../../assets/axios.png";
import jwtIcon from "../../assets/jwt.png";
import springSecurityIcon from "../../assets/secu.png";
import phpIcon from "../../assets/php.png";
import htmlIcon from "../../assets/html.png";
import figmaIcon from "../../assets/figma.png";
import flowbiteIcon from "../../assets/flowbite.png";

export const projectdata = [
        {
        name: "Friendo",
        description:
        "Friendo is a social media app built with React, Spring Boot, and WebSocket. It enables real-time communication and represents my growth as a full stack developer.",
        image: friendoImg,
        tech: [
            "Spring Boot",
            "Spring Security",
            "ReactJS",
            "TailwindCSS",
            "MySQL",
            "Azure",
            "WebSocket",
            "Axios",
            "JWT",
        ],
    },
    {
        name: "West Rembo Announcement Site",
        description:
        "This website shares official announcements, events, and updates for the West Rembo community, serving as an information hub to keep residents connected and informed.",
        image: westImg,
        tech: ["PHP", "MySQL", "HTML", "TailwindCSS", "Figma", "FlowBite"],
    },
    {
        name: "BayMark",
        description:
        "A website inspired to be like ebay where users can post items, find items, message, and add to cart.",
        image: baymarkImg,
        tech: ["Java", "Spring Boot", "MySQL", "Rest API"]
    },
    {
        name: "Hotel System",
        description:
        "A school project to build a hotel management system that allows users to book rooms.",
        image: hotelImg,
        tech: ["Java", "MySQL"],
    },
    {
        name: "Pokemone Finder",
        description:
        "A small project using a Pokémon API with CRUD functionality to manage your favorite Pokémon.",
        image: pokefinderImg,
        tech: ["Java", "MySQL", "Rest API"],
    },
    {
        name: "Weather Checker",
        description:
        "A small project combining a Geo API and Weather API to get temperature, humidity, and weather conditions.",
        image: weatherImg,
        tech: ["Java", "MySQL", "Rest API"],
    },
]