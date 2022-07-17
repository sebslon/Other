## Kubernetes basics

- Pods - Runs one or more closely related containers
- Service - Sets up networking in K8s cluster (k8s is strict about networking), subtypes includes:
  - ClusterIP
  - NodePort - exposes the container to the outside world (only good for dev purposes)
  - LoadBalancer
  - Ingress

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
```

- Kubernetes is a system to deploy containerized applications
- **Nodes** are individual virtual machines (or vm's) that run containers
- **Masters** are machines (or vm's) with a set of programs to manage nodes
- Kubernetes don't build our images - it get it from somewhere else (e.g dockerhub)
- Kubernetes (the master) decided where to run each container - each node can run a dissimilar set of containers
  - To deploy something, we update the desired state of the master with a config file
  - The master works constatnly to meet your desired state
