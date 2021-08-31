# import sys

# input = sys.stdin.readline

# # 행의 개수를 입력 받음
# n = int(input())
# # 2번째 줄부터 n+1번째 줄까지 한 행에 있는 모든 노드를 입력받음
# paint = [list(map(int, input().split())) for _ in range(n)]

# dx = [0, 0, -1, 1]
# dy = [-1, 1, 0, 0]

# print(paint)

# while True:
#     print('행 index', end=' ')
#     x = int(input())
#     print('열 index', end=' ')
#     y = int(input())
#     # i = 0
#     # i = 1
#     # i = 2
#     # i = 3
#     for i in range(4):
#         pointX = x + dx[i]
#         pointY = x + dy[i]
#         print(paint[pointX][pointY])
# -------------------------------------


# 값을 입력받음
# n = int(input())
# x, y = 1, 1
# plans = input().split()

# # L, R, U, D 에 따른 이동방향
# dx = [0, 0, -1, 1]
# dy = [-1, 1, 0, 0]
# move_types = ['L','R','U','D']

# # 이동계획을 하나씩 확인
# for plan in plans:
#     # 이동 후 좌표 구함
#     for i in range(len(move_types)):
#         if plan == move_types[i]:
#             nx = x + dx[i]
#             ny = y + dy[i]
#         # 공간을 벗어나는 경우 무시
#         if nx < 1 or ny < 1 or nx > n or ny > n:
#             continue
#         # 이동 수행
#         x,y = nx, ny
# print(x, y)


# import sys

# N, V, M = map(int, sys.stdin.readline().split())

# graph = [[0] * (N+1) for _ in range(N+1)]
# visited = [False] * (N+1)

# for i in range(M):
#     x, y = map(int, sys.stdin.readline().split())
#     graph[x][y] = 1
#     graph[y][x] = 1


# def dfs(V):
#     visited[V] = True
#     print(V, end=' ')
#     for i in range(1, N+1):
#         if not visited[i] and graph[V][i] == 1:
#             dfs(V)
# def bfs(V):
#     visited[V] = False
#     queue = V
#     while queue:
#         V = queue.pop(0)
#         print(V, end='')
#         for i in range(N+1):
#             if visited[i] and graph[V][i] == 1:
#                 queue.append(i)
#                 visited[i] = False

# dfs(V)
# print()
# bfs(V)

from collections import deque

n , m = map(int, input().split())
maze = [list(map(int, input())) for _ in range(n)]
dx, dy = [-1, 1, 0, 0],[0, 0, -1, 1]

def bfs(a,b):
    if maze[a][b] == 1:
        queue = deque([[a, b]])
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            px = x + dx[i]
            py = y + dy[i]
            if 0 <= x < n and 0 <= y < m and 0 <= px < n and 0 <= py < m:
                if maze[px][py] == 1:
                    maze[px][py] += maze[x][y]
                    queue.append([px, py])
bfs(0,0)
print(maze[n-1][m-1])


# import sys

# N, M, V = map(int, sys.stdin.readline().split())
# graph = [[0] * (N+1) for _ in range(N+1)]
# visited = [False] * (N+1)

# for _ in range(M): # 간선 길이만큼 
#     x, y = map(int, sys.stdin.readline().split())
#     graph[x][y] = 1
#     graph[y][x] = 1
    
# def dfs(V): # 깊이, stack, 재귀
#     visited[V] = True # 시작 정점은 방문 표시후 바로 출력
#     print(V, end=' ')
#     for i in range(1, N+1):
#         if not visited[i] and graph[V][i] == 1:
#             dfs(i)
            
# def bfs(V): # 너비, queue
#     visited[V] = False
#     queue = [V]
#     while queue:
#         V = queue.pop(0)
#         print(V, end=' ')
#         for i in range(1, N+1):
#             if visited[i] and graph[V][i] == 1:
#                 queue.append(i)
#                 visited[i] = False

# dfs(V)
# print()
# bfs(V)
