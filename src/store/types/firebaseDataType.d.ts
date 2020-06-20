declare module "FirebaseDataType" {
  export type FirebaseDataType = {
    documents: Array<any>;
  };

  export type FirebaseDocumentType = {
    createTime: string;
    // fields data type is depending on the response object of the firebase call.
    fields: Object;
    name: string;
    updateTime: string;
  };
}
