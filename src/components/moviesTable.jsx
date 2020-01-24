import React from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import Table from "./common/table";

const MoviesTable = ({ movies, sortColumn, onLike, onDelete, onSort }) => {
  const columns = [
    {
      path: "title",
      label: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like
          liked={movie.liked}
          onClick={() => onLike(movie)}
          onLike={onLike}
        />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  return (
    <Table
      columns={columns}
      sortColumn={sortColumn}
      data={movies}
      onSort={onSort}
    />
  );
};

export default MoviesTable;
