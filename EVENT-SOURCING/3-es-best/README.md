## Use CQRS and Event Sourcing to Scale Read API

https://www.youtube.com/watch?v=kFNtKiK2SPs&list=LL&index=1&t=29s&ab_channel=TimurShemsedinov

```
+---------------------+    +-------------+    +------------+
|                     |    |             |    |            |
|       Client        +--->+  Write API  +--->+  Database  +---+
|                     |    |             |    |            |   |
|   Command { ... }   |    +-------------+    +------------+   |
|                     |                                        |
|                     |    +-------------+    +------------+   |
|   Query { ... }     |    |             |    |            |   |
|                     +--->+  Read API   +--->+  Read DB   +<--+
|                     |    |             |    |            |   |
|                     |    +-------------+    +------------+   |
|                     |                                        |
|                     |    +-------------+    +------------+   |
|                     |    |             |    |            |   |
|                     +--->+  Read API   +--->+  Read DB   +<--+
|                     |    |             |    |            |
+---------------------+    +-------------+    +------------+
```

- Use patterns: Command, Query Object
- Separate Read and Write APIs
- Scale Database: use multiple replicas for read
- Use Event Sourcing (message bus) for DB sync
