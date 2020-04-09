import React from 'react';
import GridTemplate from "./GridTemplate";
import Card from "../components/molecules/Card";
import {connect} from "react-redux";

const Articles = ({articles}) => (
    <GridTemplate pageType="articles">
        {articles.map(({ title, content, articleUrl, created, id }) => (
            <Card
                id={id}
                cardType="articles"
                title={title}
                content={content}
                articleUrl={articleUrl}
                created={created}
                key={id}
            />
        ))}
    </GridTemplate>
);

const mapStateToProps = ({articles}) => ({articles});

export default connect(mapStateToProps)(Articles);

