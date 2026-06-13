import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureContainerservicesContainerserviceApi implements ICredentialType {
        name = 'N8nDevAzureContainerservicesContainerserviceApi';

        displayName = 'Azure Containerservices Containerservice API';

        icon: Icon = { light: 'file:../nodes/AzureContainerservicesContainerservice/azure-containerservices-containerservice.png', dark: 'file:../nodes/AzureContainerservicesContainerservice/azure-containerservices-containerservice.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Containerservices Containerservice API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
