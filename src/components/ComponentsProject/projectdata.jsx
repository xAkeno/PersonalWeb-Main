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
import echo from "../../assets/echo.png";

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
        link:"https://myfriendo.azurewebsites.net/"
    },
    {
        name: "West Rembo Announcement Site",
        description:
        "This website shares official announcements, events, and updates for the West Rembo community, serving as an information hub to keep residents connected and informed.",
        image: westImg,
        tech: ["PHP", "MySQL", "HTML", "TailwindCSS", "Figma", "FlowBite"],
        link:"https://brgywestremboannouncement.great-site.net/"
    },
    {
        name: "BayMark",
        description:
        "A website inspired to be like ebay where users can post items, find items, message, and add to cart.",
        image: baymarkImg,
        tech: ["Java", "Spring Boot", "MySQL","HTML","CSS", "Rest API"],
        link:"https://github.com/xAkeno/BayMark"
    },
    {
        name: "Echoes of Abyss",
        description:
        "This 2D Souls-like mobile game, developed as a school project using Godot and GDScript, features core combat mechanics, scalable gameplay systems, and a coin-based high score system. It also includes a save system and intuitive menu navigation to enhance the overall player experience.",
        image: echo,
        tech: ["Godot", "GDScript"],
        link: "https://github.com/xAkeno/echoofabyss"
    },
    {
        name: "Hotel Reservation System",
        description:
        "This school project is a Hotel Management System developed in Java, featuring a JFrame-based GUI and JDBC integration. It allows users to book rooms and manage reservations through an interactive and database-driven interface.",
        image: hotelImg,
        tech: ["Java", "MySQL"],
        link:"https://github.com/xAkeno/Group4_1A-AppDev-CaseStudy"
    },
    {
        name: "Pokemone Finder",
        description:
        "This project uses the Pokémon API to fetch details and provides CRUD features for managing a collection. Built in Java with a JFrame GUI and JDBC for MySQL, it lets users create accounts, add, favorite, and delete Pokémon.",
        image: pokefinderImg,
        tech: ["Java", "MySQL","JFrame", "Rest API"],
        link:"https://github.com/xAkeno/PokemonFinder"
    },
    {
        name: "Weather Checker",
        description:
        "This project combines a Geo API and Weather API to display temperature, humidity, and weather conditions for any location.",
        image: weatherImg,
        tech: ["Java","JFrame", "Rest API"],
        link:"https://github.com/xAkeno/WeatherApp"
    },
]