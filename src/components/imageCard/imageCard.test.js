import React from 'react';
import { render } from '@testing-library/react';
import { ImageCard } from './imageCard';

describe('ImageCard test',() => {
    beforeEach(()=>{
        jest.restoreAllMocks()
    });

    it('should show an image card',() => {
        const mockURL= 'https://images.pexels.com/photos/6994926/pexels-photo-6994926.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280';
        const {getByText} = render(
            <ImageCard src={mockURL} duration='1.5678' firstname='Erline' lastname='Marks' likes='20'></ImageCard>
        );
        expect(getByText('20')).toBeInTheDocument;

    })
})