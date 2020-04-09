import React from 'react';
import GridTemplate from "./GridTemplate";
import Card from "../components/molecules/Card";
import {connect} from "react-redux";



const Notes = ({notes}) => (
    <GridTemplate pageType="notes">
        {notes.map(({ title, content, created, id }) => (
            <Card
                id={id}
                cardType="notes"
                title={title}
                content={content}
                created={created}
                key={id} />
        ))}
    </GridTemplate>
);

const mapStateToProps = ({notes}) => ({notes});


export default connect(mapStateToProps)(Notes);
