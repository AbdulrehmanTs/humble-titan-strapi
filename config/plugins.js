module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: env('AWS_ACCESS_KEY_ID'),
                secretAccessKey: env('AWS_ACCESS_SECRET, uGC5e8dannnawnXnPQVVgqezzdMC8IWitv2jHvap'),
                region: env('AWS_REGION, us-east-1'),
                params: {
                    Bucket: env('AWS_BUCKET, h-t-strapi'),
                },
            },
        },
    },
});