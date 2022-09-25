# Basic microservices Blog App

Built Event Bus from scratch without usage of too many libs etc. for better understanding of microservices architecture and communication.

Event Bus (event-based communication between different microservices)

- Many different implementations: RabbitMQ, Kafka, NATS
- Receives events, publishes them to listeners
- Many different subtle features that make async communication way easier or way harder (in production grade implementations)

## Some other infos

- Updating k8s deployments, two methods: change image or run `kubectl rollout restart deployment [depl_name]`
- Local development with Kubernetes and Skaffold (skaffold.yaml + `skaffold dev`)
