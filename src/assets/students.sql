CREATE TABLE IF NOT EXISTS `students` (
  `id` int auto_increment primary key,
  `name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `gender` char(1) NOT NULL,
  `teams` varchar(20) NOT NULL,
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO `students` (`name`, `email`, `gender`, `teams`) VALUES
('Ho Anh Minh', 'anhminhho2409@gmail.com', 'M', 'Team 1'),
('Nguyen Minh Hoang', 'nguyenminhhoang1308@gmail.com', 'M', 'Team 2'),
('Hoang Minh Quang', 'quangeasyq@gmail.com', 'F', 'Team 3'),
('To Bao Son', 'tolovehen@gmail.com', 'M', 'Team 4'),
('Nguyen Dinh Lam', 'lamnguyen2208@gmail.com', 'F', 'Team 5'),
('To Minh Quan', 'firstlove123@gmail.com', 'F', 'Team 1'),
('Nguyen Dang Manh', 'nguyenmanhdang246@gmail.com', 'M', 'Team 2');