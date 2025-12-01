# Hosting My Static Portfolio Website using S3

We are going to host My Static Portfolio Website on AWS using S3 service.

## Creation of S3 Bucket.

1. ACL (Access Control List) should be disabled.
2. Unblock all the public access.


## Enabling the Static Website service in S3
```
You can find the static_web_hosting.json file required while enabling.
```
**Note** : Bucket url will be visible. When you try to access it, you will see "Forbidden Error".
           This means you don't have the read access


## Editing Bucket Policy to Read Access
```
You can find the bucket_policy.json file required while editing.
```
**Note** : You won't see Forbidden Error anymore with the Bucket URL. You will "Page not Found"
           because you have not uploaded the objects in the S3 Bucket.


## Uploading Objects in Bucket

You can directly upload all the files of your static website from the Upload button inside S3 Bucket.

**Note** : You are ready to access the URL. Your website is visible.


## Installation of AWSCLI on Instance

```
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
aws --version
```
```
Create a IAM role and provide full EC2 and S3 access
Create a Access Key, which will Access_Key_ID and Secret_Acess_Key_ID
Once you run the below command, you need to provide the key values:-
aws configure
Access_Key_ID: ......
Secret_Acess_Key_ID: .....
```
**Note** : Try "aws s3 ls" to verify the configuration. It will list down all S3 Buckets.


## Copying the file from S3 to Instance and ViceVersa

You can now copy the file from S3 to your EC2 via awscli.
You can edit/modify files data and can again upload it to S3. 
Once you refresh the Bucket URL, you can see the changes.

```
aws s3 cp s3://your_bucket_name/index.html .
vim index.html
aws s3 cp index.html s3://your_bucket_name/
```

