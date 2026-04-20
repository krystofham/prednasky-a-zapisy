```python
reviews.rename(columns={'points': 'score'})
# sloupec

reviews.rename(index={0: 'firstEntry', 1: 'secondEntry'})
# radek

reviews.rename_axis("wines", axis='rows').rename_axis("fields", axis='columns')
# renaming axis
```

```python
pd.concat([canadian_youtube, british_youtube])

left = canadian_youtube.set_index(['title', 'trending_date'])
right = british_youtube.set_index(['title', 'trending_date'])
left.join(right, lsuffix='_CAN', rsuffix='_UK')
```

| video_id_CAN | channel_title_CAN | category_id_CAN | publish_time_CAN | tags_CAN | views_CAN | likes_CAN | dislikes_CAN | comment_count_CAN | thumbnail_link_CAN | ... | tags_UK | views_UK | likes_UK | dislikes_UK | comment_count_UK | thumbnail_link_UK | comments_disabled_UK | ratings_disabled_UK | video_error_or_removed_UK | description_UK |     |     |
| ------------ | ----------------- | --------------- | ---------------- | -------- | --------- | --------- | ------------ | ----------------- | ------------------ | --- | ------- | -------- | -------- | ----------- | ---------------- | ----------------- | -------------------- | ------------------- | ------------------------- | -------------- | --- | --- |
```python
```