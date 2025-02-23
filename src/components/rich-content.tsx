"use client";
import  { type RenderableTreeNode, renderers } from '@markdoc/markdoc';
import React from 'react';

interface MarkdocRendererProps {
	content: RenderableTreeNode
}

const RichContent = ({ content }: MarkdocRendererProps) => {

	console.log({content});
	
	
	return null // renderers.react(content, React, { components: {} });
};

export default RichContent;
