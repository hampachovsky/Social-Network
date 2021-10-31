import { Field, Form, Formik } from 'formik';
import React from 'react';
import { FilterType } from 'redux/usersReducer';
import style from './SearchFormUsers.module.css';

type FormPropsType = {
  onFilterChanged: (filter: FilterType) => void;
  filter: FilterType;
};

type FriendFormType = 'null' | 'true' | 'false';
type InitialValuesFormType = {
  term: string;
  friend: FriendFormType;
};

export const UsersSearchForm: React.FC<FormPropsType> = ({ onFilterChanged, filter }) => {
  const initialValues: InitialValuesFormType = {
    term: filter.term,
    friend: String(filter.friend) as FriendFormType,
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        const filter: FilterType = {
          term: values.term,
          friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false,
        };
        actions.setSubmitting(true);
        await onFilterChanged(filter);
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting, handleChange, handleSubmit }) => (
        <Form className={style.searchContainer} onSubmit={handleSubmit}>
          <Field type="text" name="term" onChange={handleChange} className={style.queryInput} />
          <button disabled={isSubmitting} className={style.searchBtn} type="submit">
            Search
          </button>
          <div className={style.selectFieldContainer}>
            <Field name="friend" as="select" className={style.selectField}>
              <option value="null">All</option>
              <option value="true">Only followed</option>
              <option value="false">Only unfollowed</option>
            </Field>
          </div>
        </Form>
      )}
    </Formik>
  );
};
