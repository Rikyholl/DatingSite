from rest_framework import serializers
from profiles.models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

    def validate_age(self, value):
        if value < 18:
            raise serializers.ValidationError('Возраст должен быть больше или равен 18 годам.')
        return value
