declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

declare type CreateDocumentParams = {
  userId: string;
  email: string;
};

declare type AddDocumentBtnProps = {
  userId: string;
  email: string;
};

declare type RoomMetaData = {
  creatorId: string;
  email: string;
  title: string;
};

declare type CollaborativeRoomProps = {
  roomId: string;
  roomMetadata: RoomMetaData;
};
