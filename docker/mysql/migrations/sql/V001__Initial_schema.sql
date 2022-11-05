CREATE SCHEMA IF NOT EXISTS scheduler collate utf8mb4_unicode_ci;

create table if not exists `priorities`
(
    `priority_class` TINYINT UNSIGNED UNIQUE,
    `hours`          TINYINT UNSIGNED,
    PRIMARY KEY (`priority_class`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

create table if not exists `competitions`
(
    `competition_id` TINYINT NOT NULL AUTO_INCREMENT,
    `country`        VARCHAR(255),
    `competition`    VARCHAR(255),
    `priority`       TINYINT UNSIGNED,
    FOREIGN KEY (`priority`) REFERENCES priorities (`priority_class`),
    PRIMARY KEY (`competition_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

create table if not exists `schedule`
(
    `id`       TINYINT NOT NULL AUTO_INCREMENT,
    `quantity` TINYINT UNSIGNED,
    `shift`    VARCHAR(7),
    `date`     DATE,
    `squad`    VARCHAR(3),
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

create table if not exists `matches`
(
    `id`            MEDIUMINT UNSIGNED,
    `match_date`    DATE,
    `kick_off_time` VARCHAR(5),
    `timestamp`     TIMESTAMP,
    `competition`   VARCHAR(255),
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

create table if not exists `preferences`
(
    `id`          TINYINT NOT NULL AUTO_INCREMENT,
    `competition` VARCHAR(255),
    `squad`       VARCHAR(3),
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;