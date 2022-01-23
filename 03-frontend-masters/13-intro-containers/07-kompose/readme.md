- Modify docker-compose

  - build > image (pull from dockerhub or another registry)
  - add labels for, for example load balancers
  - explicitly set the ports

- kubectl proxy --port=8080 &
- kompose up
  <br>
- kubectl scale --replicas=5 deployment/web (creating multiple containers, scaling)
- kubectl delete all --all
  <br>
- kompose convert (create yaml files) - kubernetes configurations
