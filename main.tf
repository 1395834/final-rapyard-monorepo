resource "aws_dynamodb_table" "battles" {
  name         = "rapyard-battles"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"
  attribute { name = "id"; type = "S" }
}
resource "aws_dynamodb_table" "tracks" {
  name         = "rapyard-tracks"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"
  attribute { name = "id"; type = "S" }
}
