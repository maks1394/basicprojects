import React from 'react';
import { TestNew } from './TestNew';

export default { title: 'components/ValidatingTest/TestNew' };

const defaultProps: React.ComponentProps<typeof TestNew> = {

};

export const Overview = () => {
    return (
        <TestNew {...defaultProps} />
    );
};
