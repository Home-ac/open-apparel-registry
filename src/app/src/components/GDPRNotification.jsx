import React, { PureComponent } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Button from './Button';
import ShowOnly from './ShowOnly';
import COLOURS from '../util/COLOURS';

class GDPRNotification extends PureComponent {
    state = { open: true };

    componentDidMount() {
        const dismissed = sessionStorage.getItem('dismissedGDPRAlert');
        if (dismissed) {
            this.setState({ open: false }); // eslint-disable-line react/no-did-mount-set-state
        }
    }

    dismissGDPRAlert = () => {
        this.setState({ open: false });
        sessionStorage.setItem('dismissedGDPRAlert', true);
    };

    render() {
        const GDPRActions = (
            <div>
                <Button
                    text="Reject"
                    style={{
                        background: COLOURS.LIGHT_BLUE,
                        marginRight: '10px',
                    }}
                    onClick={this.dismissGDPRAlert}
                />
                <Button text="Accept" onClick={this.dismissGDPRAlert} />
            </div>
        );

        const GDPRMessage =
            `We use cookies to collect and analyze
            information on site performance and usage,
            and to enhance content. By clicking Accept,
            you agree to allow cookies to be placed.
            To find out more, visit our terms of service
            and our privacy policy.`;

        return (
            <ShowOnly when={this.state.open}>
                <Snackbar
                    className="gdpr-notification"
                    open={this.state.open}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    action={GDPRActions}
                    message={GDPRMessage}
                />
            </ShowOnly>
        );
    }
}

export default GDPRNotification;