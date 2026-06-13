import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureContainerservicesContainerservice implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Containerservices Containerservice',
                name: 'N8nDevAzureContainerservicesContainerservice',
                icon: { light: 'file:./azure-containerservices-containerservice.png', dark: 'file:./azure-containerservices-containerservice.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Container Service Client.',
                defaults: { name: 'Azure Containerservices Containerservice' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureContainerservicesContainerserviceApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
