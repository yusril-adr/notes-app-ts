import { FC } from "react";
import { Row } from "antd";
import NoteEntities from "../../entities/Note";
import NoteItem from "../NoteItem";

type Props = {
  notes: NoteEntities[],
};

const NoteList: FC<Props> = ({ notes }) => (
  <Row gutter={{ xs: 12, sm: 16, md: 24, lg: 32 }}>
    {notes.map((note) => (
      <NoteItem key={note.id} note={note} />
    ))}
  </Row>  
);

export default NoteList;