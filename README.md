# Scheduler task

A Node application to process tasks to be performed within given work shift patterns.

### MySQL DB in Docker image

The MySQL database is held in a docker container that runs on port 3306.

Before running the database you'll need to have docker and docker-compose installed. Installation instructions can be found [here](https://docs.docker.com/compose/install/).

To start the DB, run the following command in the terminal from the root directory:

```
docker-compose up
```


### TO DISCUSS

* charset encoding (on file or on cell?). detection says utf8 for both. tried iconv, buffers, etc
* moving to one parser, but createReadStream stays open
* scaling - keep a DB?



