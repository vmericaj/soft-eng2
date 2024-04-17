-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 17, 2024 at 10:45 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `softeng`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `cid` varchar(24) NOT NULL,
  `name` varchar(128) NOT NULL,
  `num` varchar(24) NOT NULL,
  `email` varchar(128) NOT NULL,
  `project` varchar(128) NOT NULL,
  `category` enum('0','1','2') NOT NULL COMMENT '0-condo, 1-house, 2-pool',
  `total` varchar(24) NOT NULL,
  `paid` varchar(24) NOT NULL,
  `balance` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `cid`, `name`, `num`, `email`, `project`, `category`, `total`, `paid`, `balance`) VALUES
(4, '013', 'dmkajk', '09282819281', 'asjdaj@gmail.com', 'pjso', '0', 'dkjal', 'pofja', 'jdao');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `eid` varchar(24) NOT NULL,
  `fullname` varchar(128) NOT NULL,
  `position` varchar(128) NOT NULL,
  `department` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `contact` varchar(24) NOT NULL,
  `image` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `eid`, `fullname`, `position`, `department`, `email`, `contact`, `image`) VALUES
(7, 'flkij', 'Juan Dela Cruz', 'aji', 'IT', 'usersampleclient@gmail.com', '09123456789', 'uploads\\attachment-1713342006695-10636552.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `pid` varchar(24) NOT NULL,
  `name` varchar(128) NOT NULL,
  `category` enum('0','1','2') NOT NULL COMMENT '0-condo, 1-house, 2-pool',
  `location` varchar(128) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `pid`, `name`, `category`, `location`, `start_date`, `end_date`) VALUES
(7, '013', 'pool ni icay', '2', 'Quezon City', '2024-04-18', '2024-04-27');

-- --------------------------------------------------------

--
-- Table structure for table `token`
--

CREATE TABLE `token` (
  `token_id` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `token` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `token`
--

INSERT INTO `token` (`token_id`, `email`, `token`, `created_at`) VALUES
(3, 'usersampleclient@gmail.com', '7241d3841ebe02aa2fea0c302ddc5f04c4a58373', '2024-04-17 16:17:05');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `fname`, `lname`, `email`, `password`) VALUES
(3, 'Juan', 'Dela Cruz', 'usersampleclient@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$yW5WnonBiwKP2qDJNEL2jg$bKTgjG931uEFtao5Mz4+kduDtibeJ+Urz7NfVG9V0xQ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`token_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `token`
--
ALTER TABLE `token`
  MODIFY `token_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
