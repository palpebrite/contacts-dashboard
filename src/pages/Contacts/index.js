import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
  IconButton
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

import { Footer } from '../Main/styles';

export default function Contacts() {
  const contactList = JSON.parse(localStorage.getItem('contacts'));

  return (
    <>
      <Box className="box" textAlign="center" p={2}>
        <Container maxWidth="sm">
          <>
            <Typography variant="h4">Contatos</Typography>
            <List>
              {contactList ? (
                contactList.map(list => (
                  <React.Fragment key={list.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar />
                      </ListItemAvatar>
                      <ListItemText
                        primary={list.name}
                        secondary={
                          <>
                            <Typography
                              component="span"
                              variant="body2"
                              color="textPrimary"
                            >
                              {list.email} <br /> {list.phone}
                            </Typography>
                          </>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="edit">
                          <Edit />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete">
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </React.Fragment>
                ))
              ) : ('Sem contato cadastrado')}
            </List>
          </>
        </Container>
      </Box>
      <Footer>
        <Link to="/">Adicionar contato</Link>
      </Footer>
    </>
  );
}
