## Kubernetes basics

Object Types:

- Pods - Runs one or more closely related containers (dev, rarely prod)
- Service - Sets up networking in K8s cluster (k8s is strict about networking), subtypes includes:
  - ClusterIP
  - NodePort - exposes the container to the outside world (only good for dev purposes)
  - LoadBalancer
  - Ingress
- Deployment - Maintains a set of identical pods, ensuring that they have the correct config and that the right number exists (dev/prod) - possible to change the overall configuration (if will differ too much - will scrap existing pods and create new ones)

```
Example:

<<Web Browser>> -> | KubeProxy| -> | Service { type: NodePort } | -> | Pod - with container exposing port 3000 |
```

Linking happens with labels and selectors.

```
Service

selectors:
  - label.key: label.value (Pod)

ports:
  - port - to make another port or another container inside app could to get access to the target pod (like proxy)
  - targetPort - port inside a pod that we want to open traffic to (send incoming traffic to port 3000 inside a Pod)
  - nodePort - (random 30000-32767) - access from outside world (randomly assigned if not specified)
```

Change current configuration of the cluster -

```
kubectl apply -f <configfile>
kubectl get pods
kubectl describe <object type> <object name>
kubectl delete -f <config file> - remove pod
```

- Kubernetes is a system to deploy containerized applications
- **Nodes** are individual virtual machines (or vm's) that run containers
- **Masters** are machines (or vm's) with a set of programs to manage nodes
- Kubernetes don't build our images - it get it from somewhere else (e.g dockerhub)
- Kubernetes (the master) decided where to run each container - each node can run a dissimilar set of containers
  - To deploy something, we update the desired state of the master with a config file
  - The master works constatnly to meet your desired state

**Triggering deployment updates (imperatively)**:

- Tag the image with a version, push to docker hub (docker build -t sebastiansloniec/imagename:v1 .)
- kubectl set image <object_type> / <object_name> <container_name> = <new_image_to_use>
  - `kubectl set image deployment/client-deployment client=sebastiansloniec/multi-client:v5`
- PROD: prepare a script to facilitate that logic

## More on docker etc.

- Multi stage builds

```
FROM golang AS build
LABEL maintainer="xxx@gmail.com"
WORKDIR /workspace
COPY go.mod go.sum ./ ## Leverage Caching
RUN go mod download -json
COPY hello.go .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=arm64 \
    go build -a -installsuffix cgo -o hello

FROM scratch
COPY --from-build=build /workspace/hello /
USER 1001 # Creates user to run CMD/Entrypoint commands (no root)
ENTRYPOINT ["/hello"]
CMD ["world"]
```

- Inspecting images
  - docker inspect <image>
  - tool - dive

## More on kubernetes etc.

- Observability with Prometheus
  - Tools:
    - kube-prometheus (deploying prometheus in the cluster) - Grafana + Prometheus
    - OpenTracing - distributed tracing + DataDog / jaeger operator
