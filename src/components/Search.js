import React, { useContext, useState } from "react";
import { GithubContext } from "../context/github/githubContext";
import { AlertContext } from "./../context/alert/alertContext";

export const Search = () => {
    const [value, setValue] = useState("");

    const { show } = useContext(AlertContext);
    const github = useContext(GithubContext);

    const onSubmit = event => {
        if (event.key !== "Enter") {
            return;
        }
        if (value.trim()) {
            github.search(value.trim());
        } else {
            show("Введите данные пользователя");
        }
    };
    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Введите имя пользователя..."
                value={value}
                onKeyPress={onSubmit}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    );
};
