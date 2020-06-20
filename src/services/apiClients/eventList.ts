import { EventCategoryType } from "EventListType";
import { FirebaseDataType, FirebaseDocumentType } from "FirebaseDataType";
import { firestoreParser } from "helpers/functions";

export function fetchEventList(): Promise<EventCategoryType> {
  return new Promise((resolve, reject) => {
    fetch(
      "https://firestore.googleapis.com/v1/projects/tlcfm-japan/databases/(default)/documents/eventsList"
    )
      .then(async (res) => {
        const data: FirebaseDataType = await res.json();
        const parsedData = firestoreParser(data).documents.map(
          (item: FirebaseDocumentType) => item.fields
        );
        resolve(parsedData);
      })
      .catch((data) => reject(data));
  });
}
