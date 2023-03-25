DROP DATABASE IF EXISTS webapp;
CREATE DATABASE webapp;
USE webapp;

-- 学習記録テーブル作成
DROP TABLE IF EXISTS studies;
CREATE TABLE studies (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `study_date` DATETIME NOT NULL,
  `content_id` INT NOT NULL,
  `language_id` INT NOT NULL,
  `study_time` INT NOT NULL
);


-- 学習コンテンツのテーブル作成
DROP TABLE IF EXISTS contents;
CREATE TABLE contents (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  content TEXT
);

-- 学習言語のテーブル作成

DROP TABLE IF EXISTS languages;
CREATE TABLE languages (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  language VARCHAR(255) NOT NULL
);


INSERT INTO studies(study_date, content_id, language_id, study_time) VALUES
  ('2023-2-1', 2, 1, 3),
  ('2023-2-2', 1, 1, 4),
  ('2023-2-3', 1, 1, 5),
  ('2023-2-4', 1, 1, 3),
  ('2023-2-7', 2, 0, 4),
  ('2023-3-1', 2, 1, 3),
  ('2023-3-2', 2, 1, 4),
  ('2023-3-3', 2, 1, 5),
  ('2023-3-4', 2, 1, 3),
  ('2023-3-5', 2, 1, 0),
  ('2023-3-6', 2, 0, 0),
  ('2023-3-7', 2, 0, 4),
  ('2023-3-8', 2, 0, 2),
  ('2023-3-9', 2, 0, 2),
  ('2023-3-10', 2, 0, 8),
  ('2023-3-11', 0, 2, 8),
  ('2023-3-12', 0, 2, 2),
  ('2023-3-13', 0, 2, 2),
  ('2023-3-14', 0, 2, 1),
  ('2023-3-15', 0, 3, 7),
  ('2023-3-16', 0, 3, 4),
  ('2023-3-17', 0, 3, 4),
  ('2023-3-18', 0, 4, 3),
  ('2023-3-19', 0, 3, 3),
  ('2023-3-20', 0, 4, 3),
  ('2023-3-21', 1, 4, 2),
  ('2023-3-22', 1, 4, 6),
  ('2023-3-23', 1, 5, 2),
  ('2023-3-24', 1, 5, 2),
  ('2023-3-25', 1, 5, 1),
  ('2023-3-26', 1, 5, 1),
  ('2023-3-27', 1, 6, 1),
  ('2023-3-28', 1, 6, 7),
  ('2023-3-29', 1, 6, 8),
  ('2023-3-30', 1, 6, 3),
  ('2023-3-31', 1, 6, 3);


INSERT INTO contents(content) VALUES
  ("N予備校"),
  ('POSSE課題'),
  ('ドットインストール'),
  ('youtube');



INSERT INTO languages(language) VALUES
  ('HTML'),
  ('CSS'),
  ('JavaScript'),
  ('PHP'),
  ('Laravel'),
  ('SQL'),
  ('SHELL');