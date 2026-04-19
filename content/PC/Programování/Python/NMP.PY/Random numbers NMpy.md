```python
rng = np.random.default_rng()
rng = np.random.default_rng(seed=1) #stejný value
rng.integers(low = 1, high = 101, size=3)
# 3 int čísla mezi 0 a 100 v array
rng.integers(low = 1, high = 101, size=(3,2))
# 2d array


np.random.uniform() # 0-1
np.random.uniform(low = -1, high = 1, size = (3,2))

rng.shuffle(array)
rng.choice(array, size=(3, 2))

```