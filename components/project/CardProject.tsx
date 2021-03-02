import React from 'react';
import Link from 'next/link';
import Card from '../common/Card';
import Project from '../../models/Project';

export default function CardProject(props: any) {
    let project: Project = props.project;

    return (
        <Card title={project.name}>
            <div
                className="project-preview-img"
                style={{ backgroundImage: "url(" + project.photo + ")" }}>
                <Link href={`/project/${props.project.name.replaceAll(' ', '-')}`}>
                    <a className="project-preview-link center column">
                        <i className="fas fa-eye"></i>
                      View
                    </a>
                </Link>
            </div>
        </Card>
    );
}