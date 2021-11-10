# HackerTagger

This is a chrome extension which adds a user tagging feature to Hacker News (news.ycombinator.com). You can specify a tag for a user and then that tag will appear next to their username in comments and posts.

## Notes

* The tags are specified in a JSON block that you can edit by clicking the extension tile
  * The JSON block is totally freeform - the code only looks for specific fields - which allows you to add any sort of other data (basiclly any sort of notes)
* The tags are saved in chrome sync storage (if you have that enabled) so they'll automatically show up on all chromes you're logged in to

## Schema

Below is the format the extension expects:

```json
{
    "USERNAME1":{
        "tag": "TAG_TEXT"
    },
    "USERNAME2":{
        "tag": "TAG_TEXT2"
    },
}
```

However, this is also a fully valid block that will be saved and loaded (although only Alice and Eve will be tagged):

```json
{
    "Alice": {
        "tag": "git genius",
        "note": "very friendly!"
    },
    "Bob": {
        "projects": "example.com"
    },
    "Carol": {},
    "Eve": {
        "tag": "eavesdropper",
        "favorite_number": 22,
        "cool_projects": [
            "example.com",
            "example.com"
        ]
    }
}
```
