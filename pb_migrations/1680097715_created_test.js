migrate((db) => {
  const collection = new Collection({
    "id": "ntjz0xlkxpu3cdy",
    "created": "2023-03-29 13:48:35.002Z",
    "updated": "2023-03-29 13:48:35.002Z",
    "name": "test",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rzchahct",
        "name": "text",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ntjz0xlkxpu3cdy");

  return dao.deleteCollection(collection);
})
