# Use an existing docker image as base
FROM alpine

# Download and install dependencies
RUN apk add --update redis

# tell the imagewhat to do when it starts as a container
CMD ["redis-server"]