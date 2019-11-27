import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

const RecipeModal = ({ label, onRecipeAdd, id, recipe }) => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [inValid, setInvalid] = useState(false);

  const toggle = () => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }

    setModal(!modal);
  };

  const onTitleChange = title => setTitle(title);

  const onDescriptionChange = description => setDescription(description);

  const onAdd = () => {
    if (!title.trim() || !description.trim()) {
      setInvalid(true);
      return;
    }
    onRecipeAdd({ title, description, id });
    toggle();
    setTitle("");
    setDescription("");
    setInvalid(false);
  };
  return (
    <div>
      <Button color="outline-primary" onClick={toggle} className="w-100 mb-2">
        {label}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{label}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                invalid={inValid && !title.trim()}
                type="text"
                name="title"
                id="title"
                placeholder="Enter title..."
                value={title}
                onChange={e => {
                  onTitleChange(e.target.value);
                }}
              />
              <FormFeedback>Title is required</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                invalid={inValid && !description.trim()}
                type="textarea"
                name="text"
                id="description"
                placeholder="Enter description..."
                rows="7"
                value={description}
                onChange={e => {
                  onDescriptionChange(e.target.value);
                }}
              />
              <FormFeedback>Description is required</FormFeedback>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onAdd}>
            OK
          </Button>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default RecipeModal;
