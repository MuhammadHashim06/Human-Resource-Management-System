-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2024 at 08:21 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hrsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `ID` int(11) NOT NULL,
  `EMPLOYEEID` int(11) NOT NULL,
  `SUBJECT` text NOT NULL,
  `DESCRIPTION` text NOT NULL,
  `DATE` date NOT NULL,
  `STATUS` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`ID`, `EMPLOYEEID`, `SUBJECT`, `DESCRIPTION`, `DATE`, `STATUS`) VALUES
(1, 2, 'Sick leave', 'Sir G Bukhar Ha CHuti dai dain', '2024-04-10', 'rejected'),
(2, 1, 'Holiday', 'SIr G Ghr jana chuti da do\r\n', '2024-04-01', 'approved'),
(5, 3, 'Work From Home', 'orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo odio quis tellus tincidunt, vel congue elit blandit.', '2024-04-09', 'approved'),
(7, 2, 'Home Work', 'BS CHAL JAE', '0000-00-00', 'approved'),
(8, 2, 'Sick leave', 'SIR G Ghr Jana', '0000-00-00', 'Pending'),
(9, 2, 'Hello G', 'Chuti da do', '0000-00-00', 'Pending'),
(10, 2, 'Ho ja SUbmit', 'Dekhi kia bnti', '0000-00-00', 'Pending'),
(11, 4, 'Home Work', 'Chutti da dain\n', '0000-00-00', 'Pending'),
(12, 4, 'Home Work', 'Ho ja SUbmit', '0000-00-00', 'Pending'),
(13, 3, 'Home Work', 'So waht', '0000-00-00', 'rejected'),
(14, 3, 'Home Work', 'Day dao', '0000-00-00', 'Pending'),
(15, 3, 'last Apllication', 'Ab hojae bs', '0000-00-00', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `ID` int(11) NOT NULL,
  `EMPLOYEEID` int(11) NOT NULL,
  `DATE` date NOT NULL,
  `TIME` time NOT NULL,
  `STATUS` enum('Present','Absent','Late') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`ID`, `EMPLOYEEID`, `DATE`, `TIME`, `STATUS`) VALUES
(1, 2, '0000-00-00', '11:17:34', 'Late'),
(4, 2, '0000-00-00', '09:36:58', 'Late'),
(5, 2, '0000-00-00', '09:37:09', 'Late'),
(6, 2, '0000-00-00', '09:42:57', 'Late'),
(7, 2, '0000-00-00', '10:02:51', 'Late'),
(8, 2, '0000-00-00', '10:09:45', 'Late'),
(9, 2, '0000-00-00', '10:10:31', 'Late'),
(10, 3, '0000-00-00', '11:20:04', 'Late'),
(11, 4, '0000-00-00', '11:38:27', 'Late'),
(12, 3, '2024-04-16', '09:36:14', 'Absent');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `ID` int(11) NOT NULL,
  `NAME` text NOT NULL,
  `ROLE` text NOT NULL,
  `EMAIL` text NOT NULL,
  `PASSWORD` text NOT NULL,
  `DEPARTMENT` text NOT NULL,
  `SALARY` int(11) NOT NULL,
  `DATEOFJOINING` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`ID`, `NAME`, `ROLE`, `EMAIL`, `PASSWORD`, `DEPARTMENT`, `SALARY`, `DATEOFJOINING`) VALUES
(1, 'Muhammad', 'Admin', 'muhammad@gmail.com', 'Muhammad123', 'IT', 900000, '2024-04-08'),
(2, 'Hashim', 'Employee', 'hashim@gmail.com', 'Hashim123', 'Design', 700000, '2024-04-01'),
(3, 'Saqib', 'Employee', 'saqib@gmail.com', 'Saqib123', 'IT', 700000, '2024-04-01'),
(4, 'Zohan', 'Employee', 'zohan@gmail.com', 'Zohan123', 'IT', 700000, '2024-05-09'),
(5, 'Ali', 'Employee', 'ali@gmail.com', 'Ali123', 'IT', 40000, '2024-04-03');

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `ID` int(11) NOT NULL,
  `EMPLOYEEID` int(11) NOT NULL,
  `DATEOFASSIGNING` date NOT NULL,
  `DUEDATE` date NOT NULL,
  `TITLE` text NOT NULL,
  `DESCRIPTION` text NOT NULL,
  `STATUS` text NOT NULL,
  `PROGRESS` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`ID`, `EMPLOYEEID`, `DATEOFASSIGNING`, `DUEDATE`, `TITLE`, `DESCRIPTION`, `STATUS`, `PROGRESS`) VALUES
(1, 2, '2024-04-11', '2024-04-18', 'Presentations', 'Presntations for New client', 'Pending', 0),
(2, 4, '2024-04-11', '2024-04-18', 'Design', 'Design for New client', 'InProgress', 23),
(3, 2, '2024-04-10', '2024-04-17', 'Design', 'Design for Client', 'InProgress', 57),
(4, 4, '2024-04-10', '2024-04-17', 'Presentation', 'Presentation for Client', 'Pending', 0),
(5, 3, '2024-04-25', '2024-04-16', 'Requirements', 'Collect Requirements for Project', 'Pending', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
