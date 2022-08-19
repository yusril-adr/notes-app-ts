import React, { FC } from 'react';
import { PageHeader, Typography } from 'antd';

// Global Components
import Container from './components/Container';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';

// Redux Type
import { RootState } from './services/redux/store';

// Global Components
import AddForm from './components/AddForm';
import NoteList from './components/NoteList';

// Services
// import NotesService from './services/localStorage/NotesService';

const App: FC = () => {
  const notes = useSelector((state: RootState) => state.notes.list);
  const archivedNotes = notes.filter((note) => note.archived);
  const unArchivedNotes = notes.filter((note) => !note.archived);

  return (
    <>
      <PageHeader className="site-page-header" title="Notes App" />
  
      <Container style={{ maxWidth: "90rem", padding: "2rem 3rem" } }>
  
        <AddForm />

        <div
          style={{
            marginTop: '2rem',
          }}
        >
          <Typography.Title level={3}>
            Unarchived
          </Typography.Title>
          <NoteList notes={unArchivedNotes} />
        </div>
        
        <div
          style={{
            marginTop: '2rem',
          }}
        >
          <Typography.Title level={3}>
            Archived
          </Typography.Title>
          <NoteList notes={archivedNotes} />
        </div>
        
      </Container>
  
      <Footer />
  
    </>
  );
};

export default App;
