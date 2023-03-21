import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import S from './InputSearch.module.css';

export default function InputSearch({ handleSearchInputChange }) {
  return (
    <div className={S.asd}>
      <input
        className={S.input}
        type="text"
        placeholder="País..."
        onChange={handleSearchInputChange}
      />
      <span className={S.searchIcon}>
        <AiOutlineSearch />
      </span>
    </div>
  );
}
