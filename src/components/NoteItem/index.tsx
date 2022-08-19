import { FC } from "react";
import { Col, Card, Typography } from "antd";
import { DeleteOutlined, FolderOutlined, FolderOpenOutlined } from '@ant-design/icons';

// Entities
import NoteEntities from "../../entities/Note";

// Utils
import DateParser from "../../utils/DateParser";

// Services
import NotesService from "../../services/localStorage/NotesService";

// Redux
import { updateNoteList } from "../../services/redux/Note";
import { useAppDispatch } from "../../services/redux/store";

type Props = {
  key: any,
  note: NoteEntities,
}

const NoteItem: FC<Props> = ({ note }) => {
  const { id, title, body, createdAt, archived } = note;

  const dispatch = useAppDispatch();
  
  const deleteNote = () => {
    NotesService.deleteNoteById(id);

    dispatch(updateNoteList());
  };

  const toggleArchive = () => {
    NotesService.updateNoteById(id, {
      ...note,
      archived: !archived,
    });

    dispatch(updateNoteList());
  };

  return (
    <Col 
      className="gutter-row"
      xs={{ span: 24 }} 
      lg={{ span: 8 }}
      style={{
        marginTop: '2rem',
      }}
    >
        <Card 
          title={title}
          extra={
            <Typography.Text>
              {DateParser.showFormattedDate(createdAt)}
            </Typography.Text>
          }
          actions={[
            <DeleteOutlined key="delete" onClick={deleteNote} />,
            archived ? <FolderOutlined key="unarchive" onClick={toggleArchive} /> : <FolderOpenOutlined key="archive" onClick={toggleArchive} />,
          ]}
        >
          <Typography.Text>
            {body}
          </Typography.Text>
        </Card>
    </Col>
  );
};

export default NoteItem;
